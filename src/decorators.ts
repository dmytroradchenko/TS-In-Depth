export function freeze(p: string) {
    return function (originalClass: Function, context: ClassDecoratorContext): void {
        if (context.kind === 'class') {
            console.log(`Freezing the constructor ${p}`);
            Object.freeze(originalClass);
            Object.freeze(originalClass.prototype);
        }
    };
}

export function logger(originalClass: Function, context: ClassDecoratorContext) {
    if (context.kind === 'class') {
        const newConstructor: any = function (this: any) {
            console.log('Creating new instance');
            console.log(originalClass.name);
            this.age = 30;
        };
        // newConstructor.prototype = Object.create(originalClass.prototype);
        Object.setPrototypeOf(newConstructor.prototype, originalClass.prototype);

        newConstructor.prototype.printLibrarian = function () {
            console.log(`Librarian name: ${this.name}, Librarian age: ${this.age}`);
        };

        return newConstructor;
    }
}

export function writable(isWritable: boolean) {
    return function (originalMethod: Function, { kind, name, addInitializer }: ClassMethodDecoratorContext) {
        if (kind === 'method') {
            addInitializer(function () {
                Object.defineProperty(Object.getPrototypeOf(this), name, {
                    writable: isWritable,
                    // value: originalMethod,
                });
            });
        }
    };
}

export function timeout(ms: number) {
    return function (originalMethod: Function, { kind }: ClassMethodDecoratorContext) {
        if (kind === 'method') {
            const replaceMethod = function (this: any, ...args: unknown[]) {
                if (window.confirm('Are you sure?')) {
                    setTimeout(() => {
                        originalMethod.apply(this, args);
                    }, ms);
                }
            };
            return replaceMethod;
        }
    };
}

export function setInitial(inputValue: unknown) {
    return function (value: undefined, { kind }: ClassFieldDecoratorContext) {
        if (kind === 'field') {
            return function (initValue: number) {
                console.log(value);
                return initValue + initValue;
            };
        }
    };
}

export function format<This, Return>(pref: string = 'Mr./Mrs.') {
    return function <This, Return>(
        target: ClassAccessorDecoratorTarget<This, Return>,
        { kind }: ClassAccessorDecoratorContext<This, Return>,
    ) {
        if (kind === 'accessor') {
            return {
                get(this: This) {
                    return `${pref} ${target.get.call(this)}` as Return;
                },
                set(this: This, value: Return) {
                    target.set.call(this, value);
                },
            } as ClassAccessorDecoratorResult<This, Return>;
        }
    };
}

export function positiveInteger(originalSet: Function, { kind }: ClassSetterDecoratorContext) {
    if (kind === 'setter') {
        const newSet = function (this: any, value: number) {
            if (value < 1 && !Number.isInteger(value)) {
                throw new Error('Invalid value');
            }
            originalSet.call(this, value);
        };
        return newSet;
    }
}

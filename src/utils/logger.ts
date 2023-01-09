export function FunctionLog() {
  return function (
    _target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const targetedMethod = descriptor.value;
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    descriptor.value = function (...args: any[]) {
      console.log(`Calling ${propertyKey} at ${today.toDateString()}`);
      return targetedMethod.apply(this, args);
    };
    return descriptor;
  };
}

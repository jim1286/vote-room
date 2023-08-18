import {
  ClassConstructor,
  ExposeOptions,
  instanceToPlain,
  plainToInstance,
  Transform,
} from "class-transformer";

export function TransformMongoId(options?: ExposeOptions) {
  return (target: any, propertyKey: string) => {
    Transform((params) => params.obj[propertyKey]?.toString(), options)(
      target,
      propertyKey
    );
  };
}

export function toCls<T, V>(cls: ClassConstructor<T>, plain: any) {
  return plainToInstance(cls, plain, { excludeExtraneousValues: true });
}

export function toObj(params: any) {
  return instanceToPlain(params);
}

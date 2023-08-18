import {
  ClassConstructor,
  instanceToPlain,
  plainToInstance,
} from "class-transformer";

export function toCls<T, V>(cls: ClassConstructor<T>, plain: any) {
  return plainToInstance(cls, plain, { excludeExtraneousValues: true });
}

export function toObj(params: any) {
  return instanceToPlain(params);
}

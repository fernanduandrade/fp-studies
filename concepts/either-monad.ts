type Left<L> = { kind: 'left'; leftValue: L };
type Right<R> = { kind: 'right', rightValue: R }

type EitherValue<L, R> = Left<L> | Right<R>

// eslint-disable-next-line import/prefer-default-export
export class Either<L, R> {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  private constructor(private readonly value: EitherValue<L, R>) {}

  isLeft(): boolean {
    return this.value.kind === 'left';
  }

  isRight(): boolean {
    return this.value.kind === 'right';
  }

  // eslint-disable-next-line no-unused-vars, consistent-return
  fold<T>(leftFn: (left: L) => T, rightFn: (right: R) => T): T {
    // eslint-disable-next-line default-case
    switch (this.value.kind) {
      case 'left':
        return leftFn(this.value.leftValue);
      case 'right':
        return rightFn(this.value.rightValue);
    }
  }

  // eslint-disable-next-line no-unused-vars
  flatMap<T>(fn: (right: R) => Either<L, T>): Either<L, T> {
    return this.fold(
      (leftValue) => Either.left(leftValue),
      (rightValue) => fn(rightValue),
    );
  }

  // eslint-disable-next-line no-unused-vars
  map<T>(fn: (r: R) => T): Either<L, T> {
    return this.flatMap((r) => Either.right(fn(r)));
  }

  // eslint-disable-next-line no-unused-vars
  mapLeft<T>(fn: (l: L) => T): Either<T, R> {
    return this.flatMapLeft((l) => Either.left(fn(l)));
  }

  // eslint-disable-next-line no-unused-vars
  flatMapLeft<T>(fn: (left: L) => Either<T, R>): Either<T, R> {
    return this.fold(
      (leftValue) => fn(leftValue),
      (rightValue) => Either.right(rightValue),
    );
  }

  get(erroMessage?: string): R {
    return this.getOrThrow(erroMessage);
  }

  getOrThrow(errorMessage?: string): R {
    const throwfn = () => {
      throw Error(
        errorMessage || `An error has ocurred while retrieving value: ${this.value}`,
      );
    };

    return this.fold(
      () => throwfn(),
      (rightValue) => rightValue,
    );
  }

  getLeft(): L {
    const throwFn = () => {
      throw Error(`The value is right: ${JSON.stringify(this.value)}`);
    };

    return this.fold(
      (leftValue) => leftValue,
      () => throwFn(),
    );
  }

  getOrElse(defaultValue: R): R {
    return this.fold(
      () => defaultValue,
      (someValue) => someValue,
    );
  }

  // eslint-disable-next-line no-shadow
  static left<L, R>(value: L) {
    return new Either<L, R>({ kind: 'left', leftValue: value });
  }

  // eslint-disable-next-line no-shadow
  static right<L, R>(value: R) {
    return new Either<L, R>({ kind: 'right', rightValue: value });
  }
}

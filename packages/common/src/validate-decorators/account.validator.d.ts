import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class IsVerificationAccountConstraint implements ValidatorConstraintInterface {
    validate(value: string, _validationArguments?: ValidationArguments): Promise<boolean> | boolean;
    defaultMessage?(validationArguments?: ValidationArguments): string;
}
export declare function IsValidAccount(validationOptions?: ValidationOptions): (obj: object, propertyName: string) => void;

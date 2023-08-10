import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('Should return all errors', () => {
        const validateErrors: ValidateProfileError[] = [
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.NO_DATA,
            ValidateProfileError.SERVER_ERROR,
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors,
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            validateErrors
        );
    });
    test('Should work with empty ', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
    });
});

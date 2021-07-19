const NAME_REGEX = /^[a-z A-Z]+$/;

export const validateName = name => NAME_REGEX.test(name)
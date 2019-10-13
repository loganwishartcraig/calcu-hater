import CALC_OPERATIONS from '../constants/CalcOperations';

const wrapSelection = (selection, pre = '(', post = ')') => `${selection ? `${pre}${selection}${post}` : ''}`;

const CALC_TRANSFORM = {
    [CALC_OPERATIONS.ONE]: () => `1`,
    [CALC_OPERATIONS.TWO]: () => `2`,
    [CALC_OPERATIONS.THREE]: () => `3`,
    [CALC_OPERATIONS.FOUR]: () => `4`,
    [CALC_OPERATIONS.FIVE]: () => `5`,
    [CALC_OPERATIONS.SIX]: () => `6`,
    [CALC_OPERATIONS.SEVEN]: () => `7`,
    [CALC_OPERATIONS.EIGHT]: () => `8`,
    [CALC_OPERATIONS.NINE]: () => `9`,
    [CALC_OPERATIONS.ZERO]: () => `0`,
    [CALC_OPERATIONS.DECIMAL]: () => `.`,
    [CALC_OPERATIONS.PI]: () => ' pi ',
    [CALC_OPERATIONS.E]: () => ' e ',
    [CALC_OPERATIONS.X]: () => 'x',
    [CALC_OPERATIONS.Y]: () => 'y',
    [CALC_OPERATIONS.Z]: () => 'z',
    [CALC_OPERATIONS.OPEN_PAREN]: () => '(',
    [CALC_OPERATIONS.CLOSE_PAREN]: () => ')',
    [CALC_OPERATIONS.RAISE_TEN]: ({ selection }) => `${wrapSelection(selection)} * 10^y`,
    [CALC_OPERATIONS.MOD]: ({ selection }) => `${wrapSelection(selection)} mod a`,
    [CALC_OPERATIONS.DIVIDE]: () => '/',
    [CALC_OPERATIONS.MULTIPLY]: () => '*',
    [CALC_OPERATIONS.SUBTRACT]: () => '-',
    [CALC_OPERATIONS.ADD]: () => '+',
    [CALC_OPERATIONS.POWER_NEGATIVE_ONE]: ({ selection }) => `${wrapSelection(selection)}^-1`,
    [CALC_OPERATIONS.POWER_TWO]: ({ selection }) => `${wrapSelection(selection)}^2`,
    [CALC_OPERATIONS.POWER_Y]: ({ selection }) => `${wrapSelection(selection)}^y`,
    [CALC_OPERATIONS.TO_EXP]: ({ selection }) => `e^(${wrapSelection(selection, '', ')')}`,
    [CALC_OPERATIONS.SQUARE_ROOT]: ({ selection }) => `sqrt(${wrapSelection(selection, '', ')')}`,
    [CALC_OPERATIONS.FACTORIAL]: ({ selection }) => `${wrapSelection(selection)}!`,
    [CALC_OPERATIONS.WRAP_PAREN]: ({ selection }) => `(${selection})`,
    [CALC_OPERATIONS.COS]: ({ selection }) => `cos(${wrapSelection(selection, '', ')')}`,
    [CALC_OPERATIONS.SIN]: ({ selection }) => `sin(${wrapSelection(selection, '', ')')}`,
    [CALC_OPERATIONS.TAN]: ({ selection }) => `tan(${wrapSelection(selection, '', ')')}`,
    [CALC_OPERATIONS.SINH]: ({ selection }) => `sinh(${wrapSelection(selection, '', ')')}`,
    [CALC_OPERATIONS.COSH]: ({ selection }) => `cosh(${wrapSelection(selection, '', ')')}`,
    [CALC_OPERATIONS.TANH]: ({ selection }) => `tanh(${wrapSelection(selection, '', ')')}`,
    [CALC_OPERATIONS.ABS]: ({ selection }) => `abs(${wrapSelection(selection, '', ')')}`,
    [CALC_OPERATIONS.LOG]: ({ selection }) => `log(${wrapSelection(selection, '', ')')}`,
    [CALC_OPERATIONS.LG]: ({ selection }) => `log_2(${wrapSelection(selection, '', ')')}`,
    [CALC_OPERATIONS.LOG_B_10]: ({ selection }) => `log_10(${wrapSelection(selection, '', ')')}`,
    [CALC_OPERATIONS.LOG_BASE_B]: ({ selection }) => `log_b(${wrapSelection(selection, '', ')')}`,
    [CALC_OPERATIONS.I]: () => ' i ',
}

export default CALC_TRANSFORM;

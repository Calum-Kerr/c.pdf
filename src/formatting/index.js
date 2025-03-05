export * as Bold from './Bold';
export * as Italic from './Italic';
export * as Highlight from './RecogniseHighlightedText';
export * as Underline from './Underline';
export * as Strikethrough from './Strikethrough';
export * as Overline from './Overline';
export * as Subscript from './Subscript';
export * as Superscript from './Superscript';
export * as DoubleUnderline from './DoubleUnderline';
export * as DashedDotted from './DashedDotted';
export * as AllCaps from './AllCaps';
export * as FontWeight from './FontWeight';
export * as WordSpacing from './WordSpacing';
export * as LineHeight from './LineHeight';
export * as TextOverflow from './TextOverflow';
export * as WhiteSpace from './WhiteSpace';
export * as Blink from './Blink';

export { detect as detectBold, process as processBold } from './Bold';
export { detect as detectItalic, process as processItalic } from './Italic';
export { detect as detectHighlight, process as processHighlight } from './RecogniseHighlightedText';
// Repeat for all modules 
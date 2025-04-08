import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

/**
 * Defines the base styles and variants for button components using class-variance-authority.
 *
 * @remarks
 * This utility generates class strings based on the provided variant and size props.
 * It includes base styles applicable to all buttons and specific styles for different visual appearances and sizes.
 * The `[&_svg]` selectors target direct SVG children for consistent sizing and pointer events handling.
 */
export const buttonVariants = cva(// Base classes applied to all variants
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', {
		variants:        {
			/**
			 * Defines the visual style of the button.
			 * - `default`: Primary button style.
			 * - `destructive`: Button style for destructive actions.
			 * - `outline`: Button with an outline border.
			 * - `secondary`: Secondary button style.
			 * - `ghost`: Button with no background or border, used for low-emphasis actions.
			 * - `link`: Button styled as a hyperlink.
			 */
			variant: {
				default:     'bg-primary text-primary-foreground shadow hover:bg-primary/90',
				destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
				outline:     'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
				secondary:   'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
				ghost:       'hover:bg-accent hover:text-accent-foreground',
				link:        'text-primary underline-offset-4 hover:underline'
			},
			/**
			 * Defines the size of the button, affecting padding, height, and sometimes font size.
			 * - `default`: Standard button size.
			 * - `xs`: Extra small button size.
			 * - `sm`: Small button size.
			 * - `lg`: Large button size.
			 * - `icon`: Button size optimized for containing only an icon.
			 */
			size: {
				default: 'h-9 px-4 py-2',
				xs:      'h-7 rounded px-2', // Note: Uses default radius unless overridden
				sm:      'h-8 rounded-md px-3 text-xs',
				lg:      'h-10 rounded-md px-8',
				icon:    'h-9 w-9' // Square dimensions for icon buttons
			}
		}, // Default variants applied if none are specified
		defaultVariants: {
			variant: 'default',
			size:    'default'
		}
	})

export type ButtonVariants = VariantProps<typeof buttonVariants>
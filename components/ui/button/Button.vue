<script lang="ts" setup>
	// Import necessary modules for the component
	import type { HTMLAttributes } from 'vue'

	// Import the 'cn' function for class name concatenation
	import { cn } from '@/lib/utils'

	// Import Primitive component and its props type
	import { Primitive, type PrimitiveProps } from 'reka-ui'

	// Import Button variants and their types
	import { type ButtonVariants, buttonVariants } from '.'

	/**
	 * Define the component's props interface.
	 * This extends PrimitiveProps and adds variant, size, and class properties.
	 *
	 * TODO: Move to /utils/types.d.ts
	 */
	interface Props extends PrimitiveProps {
		// Variant property for styling
		variant?: ButtonVariants['variant']

		// Size property for sizing
		size?: ButtonVariants['size']

		// Additional class property for custom styling
		class?: HTMLAttributes['class']
	}

	/**
	 * Define the component's props with default values.
	 * The 'as' property defaults to 'button'.
	 */
	const props = withDefaults(defineProps<Props>(), {
		as: 'button'
	})
</script>

<template>
	<!-- Render the Primitive component with dynamic properties -->
	<Primitive
		:as="props.as" :as-child="props.asChild" :class="cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)">
		<slot />
	</Primitive>
</template>
// https://nuxt.com/docs/app/configuration-glossary/app-config
// https://nuxt.com/docs/api/configuration/nuxt-config#app

export default defineAppConfig({
	app: {
		head: {
			title: 'Nuxt Starter',
			meta:  [
				{
					name:    'description',
					content: 'Nuxt Starter is a boilerplate project designed to kickstart development with Nuxt 3. Essential tools and libraries to build modern web applications quickly included.'
				}
			]
		}
	}
})
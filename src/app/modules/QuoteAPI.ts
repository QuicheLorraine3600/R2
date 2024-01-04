import fetch from "node-fetch"

import DefaultEmbed from "../utils/DefaultEmbed"
import { EmbedBuilder } from "discord.js"

import wiki from 'wikijs';

const API_URL_TODAY ="https://zenquotes.io/api/today"
const API_URL_RANDOM ="https://zenquotes.io/api/random"

export interface Quote {
	content: string,
	author: string,
	html: string
}

function getQuoteFromURL(url: string) {
	return new Promise<Quote>((resolve, reject) => {
		fetch(url, {}).then(response => {
			response.json().then(quotes => {
				const quote: Quote = {
					content: quotes[0].q,
					author: quotes[0].a,
					html: quotes[0].h
				}
				resolve(quote)
			})
		}).catch(reject);
	})
}

export function getRandomQuote() {
	return getQuoteFromURL(API_URL_RANDOM)
}

export function getDailyQuote() {
	return getQuoteFromURL(API_URL_TODAY)
}

export function getEmbedOfQuote(quote: Quote) {
	return new Promise<EmbedBuilder>((resolve, reject) => {
		interface EmbedAuthor {
			name: string,
			iconURL?: string,
			url?: string
		}
		let embedAuthor: EmbedAuthor = {
			name: quote.author,
			iconURL: undefined,
			url: undefined
		}

		function end() {
			resolve(
				new DefaultEmbed()
					.setAuthor(embedAuthor)
					.setTitle(quote.content)
			)
		}

		wiki()
			.page(quote.author)
			.then(page => {
				embedAuthor.url = page.url()
				page.mainImage().then(image => {
					embedAuthor.iconURL = image
					end()
				}).catch(error => end())
			}).catch(error => end())
	})
}
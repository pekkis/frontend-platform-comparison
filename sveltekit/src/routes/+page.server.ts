import { getHeadlines } from '../services/blog';
import type { PageServerLoad } from './sverdle/$types';

// it so that it gets served as a static asset in production
export const prerender = true;

export const load = (async () => {
	const posts = await getHeadlines();
	return { posts };
}) satisfies PageServerLoad;

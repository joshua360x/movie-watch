import { client, checkError } from './client';

export function getUser() {
  return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signInUser(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return (window.location.href = '../');
}

export async function fetchWatchList() {
  const response = await client.from('movies').select().order('was_watched');
  // console.log('🚀 ~ file: fetch-utils.js ~ line 27 ~ fetchWatchList ~ response', response);

  return checkError(response);
}

export async function insertItemIntoWatchList(movie) {
  const response = await client.from('movies').insert([movie]);

  return checkError(response);
}

export async function updateIfUserWatched(api_id) {
  const response = await client.from('movies').update({ was_watched: true }).match({ api_id }).single();

  return checkError(response);
}

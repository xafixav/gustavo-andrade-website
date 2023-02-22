async function getRepositories(username) {
  const repository = await fetch(`https://api.github.com/users/${username}/repos`);
  const repositoryJSON = await repository.json();
  return repositoryJSON;
}

async function readRaw(apiAdress) {
  const result = await fetch(apiAdress);
  const reader = result.body.getReader();
  const reading = (await reader.read()).value;
  const raw = new TextDecoder().decode(reading);
  return raw;
}

async function getRepository(repoName) {
  const getReadme = await readRaw(`https://raw.githubusercontent.com/xafixav/${repoName}/main/README.md`);
  return getReadme;
}

function catchString(rawContent) {
  const text = rawContent.match(/'(?=_)(.*)(?=_)'/gm)[0].replace('_', '');
  return text;
}

export {
  readRaw,
  catchString,
  getRepositories,
  getRepository,
};
import { MeiliSearch } from 'meilisearch';

const meiliClient = new MeiliSearch({
  host: 'https://ms-915c43e52b82-12904.fra.meilisearch.io',
  apiKey: 'ad0498cacd1605188a840a712bcd1f2ddb28ed91',
});

export default meiliClient;

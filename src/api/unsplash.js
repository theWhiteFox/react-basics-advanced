import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
      headers: {
          Authorization: 'Client-ID L9ZE3QdwabSoIYvuIJrcTdnp98jfH8kZKLBBtQT3F5s'
      }
});
import httpService from './http.service';
import { nanoid } from 'nanoid';

const accountEndPoint = 'account/';

// Сделать получение по юзерайди
const accountService = {
   get: async () => {
      const { data } = await httpService.get(accountEndPoint);
      return data;
   },
   create: async (payload, userId) => {
      const _id = payload._id ? payload._id : nanoid();
      console.log('_id:', _id);
      const { data } = await httpService.put(accountEndPoint + _id, {
         _id,
         ...payload,
         userId
      });
      return data;
   },
   update: async (payload) => {
      const { data } = await httpService.patch(
         accountEndPoint + payload._id,
         payload
      );
      return data;
   },
   remove: async (accountId) => {
      const { data } = await httpService.delete(accountEndPoint + accountId);
      return data;
   }
};

export default accountService;

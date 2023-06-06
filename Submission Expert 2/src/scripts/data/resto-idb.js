import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
      autoIncrement: true,
    });
  },
});

const RestoIdb = (() => {
  const getDb = async () => dbPromise;

  const getRestaurant = async (id) => {
    const db = await getDb();
    return db.get(OBJECT_STORE_NAME, id);
  };

  const getAllRestaurants = async () => {
    const db = await getDb();
    return db.getAll(OBJECT_STORE_NAME);
  };

  const putRestaurant = async (restaurant) => {
    const db = await getDb();
    return db.put(OBJECT_STORE_NAME, restaurant);
  };

  const deleteRestaurant = async (id) => {
    const db = await getDb();
    return db.delete(OBJECT_STORE_NAME, id);
  };

  return {
    getRestaurant,
    getAllRestaurants,
    putRestaurant,
    deleteRestaurant,
  };
})();

export default RestoIdb;

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchAlbums } from './store/album-actions';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  album: {
    all_albums: [
      { 
        artistName: 'Jack Johnson',
        collectionName: 'On and On',
        trackName: 'Taylor'
      }
    ]
  }
})

describe('test actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  describe("fetch albums with search term 'What Room Was the Holiday In'", () => {
    test('Dispatches the correct action and payload', () => {
      fetchAlbums('What Room Was the Holiday In');
      expect(store.getActions()).toMatchSnapshot();
    });
  });

});


import {StyleSheet} from 'react-native';

const stylesSearchbar = StyleSheet.create({
  searchBarContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 5,
    flexDirection: 'row',
    gap: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 50,
    height: 40,
    overflow: 'hidden',
    paddingHorizontal: 6,
    flex: 1,
  },
  searchBarInput: {
    flex: 1,
    marginLeft: 10,
  },
  searchBarPin: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    borderLeftColor: 'gray',
    borderLeftWidth: 1,
    flexDirection: 'row',
    gap: 4,
  },
  searchBarFilters: {
    padding: 12,
    borderRadius: 50,
    backgroundColor: 'gray',
  },
});

export default stylesSearchbar;

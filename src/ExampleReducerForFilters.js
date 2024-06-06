import React, { useReducer } from 'react';

const initialState = {
  filters: {
    category: '',
    priceRange: [0, 100],
    rating: 0,
  },
  data: [], // Assuming this is loaded elsewhere
};

const filterReducer = (state, action) => {
  switch (action.type) {
    // Reducer cases as defined earlier
  }
};

const ExampleReducer = () => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const handleCategoryChange = (category) => {
    dispatch(setCategoryFilter(category));
  };

  const handlePriceChange = (priceRange) => {
    dispatch(setPriceFilter(priceRange));
  };

  const handleRatingChange = (rating) => {
    dispatch(setRatingFilter(rating));
  };

  const filteredData = state.data.filter(item => {
    // Apply the filters to the data
    return (
      (!state.filters.category || item.category === state.filters.category) &&
      (item.price >= state.filters.priceRange[0] && item.price <= state.filters.priceRange[1]) &&
      (item.rating >= state.filters.rating)
    );
  });

  return (
    <div>
      <button onClick={() => handleCategoryChange('electronics')}>Electronics</button>
      <button onClick={() => handleCategoryChange('books')}>Books</button>
      <button onClick={() => handlePriceChange([0, 50])}>Price: $0 - $50</button>
      <button onClick={() => handleRatingChange(4)}>Rating: 4+</button>

      <div>
        {filteredData.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ExampleReducer;

// EVERYTHING BELOW IS AN EXAMPLE OF WHAT IS NEEDED ON OTHER PAGES
// const setCategoryFilter = (category) => ({
//   type: SET_CATEGORY_FILTER,
//   payload: category,
// });

// const setPriceFilter = (priceRange) => ({
//   type: SET_PRICE_FILTER,
//   payload: priceRange,
// });

// const setRatingFilter = (rating) => ({
//   type: SET_RATING_FILTER,
//   payload: rating,
// });

// const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
// const SET_PRICE_FILTER = 'SET_PRICE_FILTER';
// const SET_RATING_FILTER = 'SET_RATING_FILTER';

// const initialState = {
//   filters: {
//     category: '',
//     priceRange: [0, 100],
//     rating: 0,
//   },
//   data: [], // This is the data you will be filtering
// };

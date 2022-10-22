import './index.css'

const FiltersGroup = props => {
  const {
    categoryData,
    ratingData,
    searchInputToFilterProducts,
    filtersChangeHandler,
  } = props

  // Have to use inputSearchString, selectedCategoryId, selectedRatingId
  // as object keys with appropriate values, when calling filtersChangeHandler
  // method with changed filter data object as input.
  const onSearchInputChange = searchInputChangeEvent => {
    const updatedSearchString = searchInputChangeEvent.target.value
    const changedSearchInputFilterObject = {
      inputSearchString: updatedSearchString,
    }

    filtersChangeHandler(changedSearchInputFilterObject)
  }

  const onClearFilters = () =>
    filtersChangeHandler({
      inputSearchString: '',
      selectedCategoryId: '',
      selectedRatingId: '',
    })

  return (
    <div className="filters-group-container">
      <input
        type="search"
        className="product-search-container"
        placeholder="Search"
        onChange={onSearchInputChange}
        value={searchInputToFilterProducts}
      />

      <div className="single-filter-container">
        <p className="filter-header">Category</p>
        <ul className="filter-options-container">
          {categoryData.map(categoryDataItem => (
            <li key={categoryDataItem.categoryId} className="filter-option">
              <button
                type="button"
                className="filter-option-button"
                onClick={() =>
                  filtersChangeHandler({
                    selectedCategoryId: categoryDataItem.categoryId,
                  })
                }
              >
                {categoryDataItem.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="single-filter-container">
        <p className="filter-header">Rating</p>
        <ul className="filter-options-container">
          {ratingData.map(ratingDataItem => (
            <li key={ratingDataItem.ratingId} className="filter-option">
              <button
                type="button"
                className="filter-option-button"
                onClick={() =>
                  filtersChangeHandler({
                    selectedRatingId: ratingDataItem.ratingId,
                  })
                }
              >
                <img
                  className="filter-option-button-img"
                  src={ratingDataItem.imageUrl}
                  alt={`rating ${ratingDataItem.ratingId}`}
                />{' '}
                {} & up
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="clear-filters-button"
        onClick={onClearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup

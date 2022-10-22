import './index.css'

const FiltersGroup = () => {
  const {categoryData, ratingData, filtersChangeHandler} = props

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

  return (
    <div className="filters-group-container">
      <input
        type="search"
        className="product-search-container"
        placeholder="Search"
        onChange={onSearchInputChange}
      />
    </div>
  )
}

export default FiltersGroup

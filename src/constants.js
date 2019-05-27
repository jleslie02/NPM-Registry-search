module.exports = {
  ALERTS: {
    NEW_ALERT: 'NEW_ALERT',
    DELETE_ALERT: 'DELETE_ALERT',
    REMOVE_ALERT_FAIL: 'REMOVE_ALERT_FAIL',
    REMOVE_ALERT: 'REMOVE_ALERT',
    ADD_ALERT: 'ADD_ALERT',
    TRIGGER_NEW_ALERT_FAIL: 'TRIGGER_NEW_ALERT_FAIL'
  },
  IMAGE_DETAILS: [
    ['Provided by Brand', 'Provided by SnackNation'],
    ['Color', 'Black and White'],
    ['Photo', 'Illustration']
  ],
  IMAGE_TAGS: [
    'Front',
    'Back',
    'Back, Flap Turned',
    'Shows Ingredients',
    'Shows Nutrition',
    'Shows Other Products',
    'Includes Box',
    'Includes People',
    'Lifestyle'
  ],
  NUTRITIONAL_FACTS: [
    {
      name: 'calories',
      subFacts: ['calories_from_fat']
    },
    {
      name: 'total_fat',
      subFacts: ['saturated_fat', 'trans_fat']
    },
    {
      name: 'cholesterol'
    },
    {
      name: 'sodium'
    },
    {
      name: 'total_carbohydrate',
      subFacts: ['dietary_fiber', 'sugars']
    },
    {
      name: 'protein'
    }
  ],
  SKU_PACKAGING: {
    size: {
      displayName: 'packageSize',
      type: 'dropdown',
      list: ['S', 'M', 'L']
    },
    // case: {
    //   type: "text",
    //   displayName: "case",
    //   disabled: true
    // },
    // color: {
    //   type: "dropdown",
    //   list: [],
    //   displayName: "case",
    //   disabled: true
    // },
    // material: {
    //   type: "dropdown",
    //   list: [],
    //   displayName: "case",
    //   disabled: true
    // },
    upc: {
      type: 'text'
    }
    // dimensions: {
    //   subItem: true,
    //   displayName: "dimensions",
    //   data: {
    //     height: {
    //       type: "number",
    //       displayName: "height",
    //       unit: "in",
    //       disabled: true
    //     },
    //     width: {
    //       type: "number",
    //       displayName: "width",
    //       unit: "in",
    //       disabled: true
    //     },
    //     length: {
    //       type: "number",
    //       displayName: "length",
    //       unit: "in",
    //       disabled: true
    //     },
    //   }
    // },
    // otherDetails: {
    //   type: "checkbox",
    //   disabled: true
    // }
  },
  PAGE: {
    UPDATE_TITLE: 'UPDATE_TITLE',
    UPDATE_LOADING: 'UPDATE_LOADING'
  },
  USER: {
    ENSURE_LOGIN: 'ENSURE_LOGIN'
  },
  BRANDS: {
    FETCH_ALL_BRANDS: 'FETCH_ALL_BRANDS',
    FETCH_NEXT_BRANDS: 'FETCH_NEXT_BRANDS',
    FETCH_BRANDS: 'FETCH_BRANDS',
    SEARCH_BRANDS: 'SEARCH_BRANDS',
    CLEAR_SEARCH: 'CLEAR_SEARCH',
    GO_TO_NEXT_BRANDS: 'GO_TO_NEXT_BRANDS',
    UPDATE_BRANDS: 'UPDATE_BRANDS',
    UPDATE_NEXT_BRANDS_FAIL: 'UPDATE_NEXT_BRANDS_FAIL',
    UPDATE_BRANDS_QUERY_NEXT: 'UPDATE_BRANDS_QUERY_NEXT',
    UPDATE_BRANDS_NEXT_FETCHING:
      'UPDATE_BRANDS_NEXT_FETCHING',
    UPDATE_BRANDS_COUNT: 'UPDATE_BRANDS_COUNT',
    UPDATE_BRANDS_FETCHED: 'UPDATE_BRANDS_FETCHED',
    UPDATE_BRANDS_LOADING: 'UPDATE_BRANDS_LOADING',
    UPDATE_BRANDS_PAGE: 'UPDATE_BRANDS_PAGE',
    UPDATE_BRANDS_PAGE_FAIL: 'UPDATE_BRANDS_PAGE_FAIL',
    UPDATE_BRANDS_NEXT: 'UPDATE_BRANDS_NEXT',
    UPDATE_BRANDS_QUERY_PAGE: 'UPDATE_BRANDS_QUERY_PAGE',
    UPDATE_BRANDS_QUERY: 'UPDATE_BRANDS_QUERY',
    ADD_BRANDS_QUERY: 'ADD_BRANDS_QUERY',
    UPDATE_BRANDS_SUCCESS: 'UPDATE_BRANDS_SUCCESS',
    UPDATE_BRANDS_FAIL: 'UPDATE_BRANDS_FAIL'
  },
  PRODUCTS: {
    ADD_PRODUCT: 'ADD_PRODUCT',
    ADD_PRODUCT_FAIL: 'ADD_PRODUCT_FAIL',
    FETCH_ALL_PRODUCTS: 'FETCH_ALL_PRODUCTS',
    UPDATE_CLAIMS: 'UPDATE_CLAIMS',
    UPDATE_PRODUCTS_FIELDS: 'UPDATE_PRODUCTS_FIELDS',
    FETCH_NEXT_PRODUCTS: 'FETCH_NEXT_PRODUCTS',
    FETCH_PRODUCTS: 'FETCH_PRODUCTS',
    SEARCH_PRODUCTS: 'SEARCH_PRODUCTS',
    CLEAR_SEARCH: 'CLEAR_SEARCH',
    GO_TO_NEXT_PRODUCTS: 'GO_TO_NEXT_PRODUCTS',
    UPDATE_PRODUCTS: 'UPDATE_PRODUCTS',
    UPDATE_NEXT_PRODUCTS_FAIL: 'UPDATE_NEXT_PRODUCTS_FAIL',
    UPDATE_PRODUCTS_QUERY_NEXT:
      'UPDATE_PRODUCTS_QUERY_NEXT',
    UPDATE_PRODUCTS_NEXT_FETCHING:
      'UPDATE_PRODUCTS_NEXT_FETCHING',
    UPDATE_PRODUCTS_COUNT: 'UPDATE_PRODUCTS_COUNT',
    UPDATE_PRODUCTS_FETCHED: 'UPDATE_PRODUCTS_FETCHED',
    UPDATE_PRODUCTS_LOADING: 'UPDATE_PRODUCTS_LOADING',
    UPDATE_PRODUCTS_PAGE: 'UPDATE_PRODUCTS_PAGE',
    UPDATE_PRODUCTS_PAGE_FAIL: 'UPDATE_PRODUCTS_PAGE_FAIL',
    UPDATE_PRODUCTS_NEXT: 'UPDATE_PRODUCTS_NEXT',
    UPDATE_PRODUCTS_QUERY_PAGE:
      'UPDATE_PRODUCTS_QUERY_PAGE',
    UPDATE_PRODUCTS_QUERY: 'UPDATE_PRODUCTS_QUERY',
    ADD_PRODUCTS_QUERY: 'ADD_PRODUCTS_QUERY',
    UPDATE_PRODUCTS_SUCCESS: 'UPDATE_PRODUCTS_SUCCESS',
    UPDATE_PRODUCTS_FAIL: 'UPDATE_PRODUCTS_FAIL'
  },
  EDITOR: {
    UPDATE_EDIT: 'UPDATE_EDIT',
    CLEAR_EDITOR: 'CLEAR_EDITOR',
    DELETE_IMAGE_SUCCESS: 'DELETE_IMAGE_SUCCESS',
    DELETE_IMAGE_FAIL: 'DELETE_IMAGE_FAIL',
    DELETE_IMAGE: 'DELETE_IMAGE',
    SAVE: 'SAVE',
    UPDATING: 'UPDATING',
    SAVE_FAILED: 'SAVE_FAILED',
    SAVE_SUCCESS: 'SAVE_SUCCESS',
    UPDATE_EDITOR_DATA: 'UPDATE_EDITOR_DATA',
    REMOVE_ADDED_PRODUCT: 'REMOVE_ADDED_PRODUCT',
    UPDATE_ADDED_PRODUCTS: 'UPDATE_ADDED_PRODUCTS',
    UPDATE_ADDED_PRODUCTS_FAIL:
      'UPDATE_ADDED_PRODUCTS_FAIL',
    UPDATE_INITIAL_SKU_DETAILS:
      'UPDATE_INITIAL_SKU_DETAILS',
    UPDATE_INITIAL_IMAGES_DETAILS:
      'UPDATE_INITIAL_IMAGES_DETAILS',
    UPDATE_EDITOR_DATA_SUCCESS:
      'UPDATE_EDITOR_DATA_SUCCESS',
    UPDATE_EDITOR_DATA_FAILED: 'UPDATE_EDITOR_DATA_FAILED',
    UPDATE_EDITOR_LOADING: 'UPDATE_EDITOR_LOADING',
    UPDATE_INITIAL_DATA: 'UPDATE_INITIAL_DATA',
    UPDATE_SKU: 'UPDATE_SKU',
    UPDATING_SKU: 'UPDATING_SKU',
    UPDATE_SKU_SUCCESS: 'UPDATE_SKU_SUCCESS',
    UPDATE_SKU_FAIL: 'UPDATE_SKU_FAIL',
    UPLOAD_IMAGE: 'UPLOAD_IMAGE',
    UPDATE_IMAGE: 'UPDATE_IMAGE',
    UPDATE_IMAGE_SUCCESS: 'UPDATE_IMAGE_SUCCESS',
    UPDATE_IMAGE_FAIL: 'UPDATEING_IMAGE_FAIL',
    UPDATING_IMAGE: 'UPDATING_IMAGE'
  },
  CANCEL_SEARCH: 'CANCEL_SEARCH',
  UPDATE_SEARCHES: 'UPDATE_SEARCHES',
  SEARCH_FAIL: 'SEARCH_FAIL',
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  SEARCH: 'SEARCH'
};

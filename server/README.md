# Overview API Documentation

## Product Information

Returns all product information at a specfic product id.

### Request URL

```
GET /products/:productId
```

### Parameters

| Params      | Type     | Description                              |
| ----------- | -------- | ------------                             |
| productId  | Integer  | request product info at given product id |

### Success Response

```
{
  "id": 12,
  "name": "Belle Shirt",
  "slogan": "Debitis eos est provident ducimus similique saepe quo eos.",
  "description": "Qui nesciunt nesciunt consequuntur. Quia ut incidunt et quam sit rerum tempora. Placeat ipsa facere corporis et et quia repudiandae consequatur consequatur. Temporibus quae sapiente quae sed. Quisquam consequatur soluta.",
  "category": "Shirt",
  "default_price": "570",
  "features": [
    {
      "feature": "Frame",
      "value": "AllLight Composition Resin"
    }
  ]
}
```

## Style Information

Returns all styles for a specifed product.

### Request URL

```
GET /products/:productId/styles
```

### Parameters

| Params      | Type     | Description                              |
| ----------- | -------- | ------------                             |
| productId  | Integer  | request styles at given product id |

### Success Response

```
{
  "product_id": 10,
  "results": [
    {
      "style_id": 47,
      "name": "Reality",
      "sale_price": "null",
      "original_price": "500000000",
      "default_style": 1,
      "photos": [
        {
          "url": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609",
          "thumbnail_url": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609"
        }
      ]
    },
    {
      "style_id": 48,
      "name": "Space",
      "sale_price": "null",
      "original_price": "500000000",
      "default_style": 0,
      "photos": [
        {
          "url": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/0a/Space_Stone_VFX.png/revision/latest?cb=20190427012702",
          "thumbnail_url": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/0a/Space_Stone_VFX.png/revision/latest?cb=20190427012702"
        }
      ]
    }
  ]
}
```

## Sku Information

Returns all skus information for a specifed product style.

### Request URL

```
GET /styles/:styleId/skus
```

### Parameters

| Params      | Type     | Description                              |
| ----------- | -------- | ------------                             |
| styleId  | Integer  | request skus at a specific style id |

### Success Response

```
{
  "7": {
    "size": "S",
    "quantity": 16
  },
  "8": {
    "size": "XS",
    "quantity": 8
  },
  "9": {
    "size": "M",
    "quantity": 17
  },
  "10": {
    "size": "L",
    "quantity": 10
  },
  "11": {
    "size": "XL",
    "quantity": 15
  },
  "12": {
    "size": "XXL",
    "quantity": 6
  }
}
```

## Related Product Information

Returns all product ids that is related to the current product.

### Request URL

```
GET /products/:productId/related
```

### Parameters

| Params      | Type     | Description                              |
| ----------- | -------- | ------------                             |
| productId  | Integer  | request related product ids for current product |

### Success Response

```
[
  3,
  7,
  6,
  5
]
```

## Cart

Add skuId(product, specific style, and size), and count to the cart.

### Request URL

```
POST /cart
```

### Request Body Parameters

| Params      | Type     | Description                              |
| ----------- | -------- | ------------                             |
| skuId  | Integer  | ID of product in specific style and size |
| count  | Integer  | number of products that being added to the cart |

### Success Response

```
successfully add to the cart
```
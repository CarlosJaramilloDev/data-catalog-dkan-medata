import React from 'react';

export const defaultFacets = {
  "theme": {
    "label": "Temas",
    "field": "theme.0.title",
    "showAll": false,
    "limit": 10,
    "reset": {
      "active": false,
      "icon": <span></span>
    },
  },
  "keyword": {
    "label": "Etiquetas",
    "field": "keyword.*.title",
    "showAll": false,
    "limit": 10,
    "reset": {
      "active": false,
      "icon": <span></span>
    },
  },
  "publisher__name": {
    "label": "Autores",
    "field": "publisher__name",
    "showAll": false,
    "limit": 10,
    "reset": {
      "active": false,
      "icon": <span></span>
    },
  },
   "type": {
    "label": "Tipo",
    "field": "type",
    "showAll": false,
    "limit": 10,
    "reset": {
      "active": false,
      "icon": <span></span>
    },
  },
  "modified": {
   "label": "Fecha modificación",
   "field": "modified",
   "showAll": false,
   "limit": 10,
   "reset": {
     "active": false,
     "icon": <span></span>
   },
 }
}

export function normalizeItems(resultItems) {
  let nItems = resultItems;
  if (!Array.isArray(nItems)) {
    nItems = Object.values(nItems);
  }
  return nItems.map((x) => {
    let item = {};
    item = {
      identifier: x.identifier,
      modified: x.modified,
      description: x.description,
      theme: x.theme,
      format: x.distribution,
      title: x.title,
      ref: `/dataset/${x.identifier}`
    };
    if (
      Object.prototype.hasOwnProperty.call(x, "publisher") &&
      Object.prototype.hasOwnProperty.call(x.publisher, "name")
    ) {
      item.publisher = x.publisher.name;
    } else {
      item.publisher = "";
    }
    return item;
  });
}

export const sortOptions = [
  {
    field: 'modified',
    order: 'desc',
    label: 'Fecha'
  },
  {
    field: 'title',
    order: 'asc',
    label: 'Alfabéticamente'
  }
];

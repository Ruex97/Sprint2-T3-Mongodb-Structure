
db.createCollection( 'Supplier', {validator: {$jsonSchema: {bsonType: 'object',title:'Supplier',required: [         'first_name'],properties: {first_name: {bsonType: 'string'},phone_number: {bsonType: 'string'},fax: {bsonType: 'string'},company_nif: {bsonType: 'string'},address: {bsonType: 'object',
title:'object',required: [         'street',          'number',          'zip_code',          'country'],properties: {street: {bsonType: 'string'},number: {bsonType: 'string'},zip_code: {bsonType: 'string'},country: {bsonType: 'string'},flat: {bsonType: 'string'},door: {bsonType: 'string'}}}}         }      }});  
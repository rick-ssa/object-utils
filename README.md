# OBJECT UTILS

## 1. Object comparation  

```
objectIsEqual(data1, data2, ...ingoredKeys)
```
- Description: Compare two objects.

- params:
    - data1: the first object;
    - data2: the second object;
    - ignoredKeys: list of string with keys name to be ignored on the comparation.

- return: boolean.

## 2. Array check

```
isArray(object)
```

- Description: Check if an object is an Array.

- params:
    - Object: the object to be verified.

- return: boolean.

## 3. Date check

```
isDate(object)
```

- Description: Check if an object is a date.

- params:
    - Object: the object to be verified.

- return: boolean.

## 4. Sort objects by number of keys 

```
sortObjectsByKeysLength(...objects)
```

- Description: sorted objects by number of keys.

- params:
    - ...objects: the list of objects to be sorted.

- return: an array of objects sorted by number of keys.


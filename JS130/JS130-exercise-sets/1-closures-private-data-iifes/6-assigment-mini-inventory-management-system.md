In this exercise, you'll build a simple inventory management system.
The system is composed of an item creator, an items manager, and a
reports manager. The item creator makes sure that all necessary
information are present and valid. The item manager is responsible for
creating items, updating information about items, deleting items, and
querying information about the items. Finally, the report manager
generates reports for a specific item or ALL items. Reports for
specific items are generated from report objects created from the
report manager. The report manager is responsible for reports for
all items.

Component Specifications
Here's all the required information for an item:

1. SKU code: This is the unique identifier for a product. It consists
   of the first 3 letters of the item and the first 2 letters of the
   category. If the item name consists of two words and the first word
   consists of two letters only, the next letter is taken from the next
   word.
2. Item name: This is the name of the item. It must consist of a
   minimum of 5 characters. Spaces are not counted as characters.
3. Category: This is the category that the item belongs to. It must
   consist of a minimum of 5 characters and be only one word.
4. Quantity: This is the quantity in stock of an item. This must not
   be blank. You may assume that a valid number will be provided.

The following are the methods that the items manager can perform:
1. create: This method creates a new item. Returns false if creation is
   not successful.
2. update: This method accepts an SKU Code and an object as an argument
   and updates any of the information on an item. You may assume valid
   values will be provided.
3. delete: This method accepts an SKU Code and deletes the item from the
   list. You may assume a valid SKU code is provided.
4. items: This property contains a list of all the items.
5. inStock: This method list all the items that have a quantity greater
   than 0.
6. itemsInCategory: This method list all the items for a given category.

The following are the methods on the reports managers:

1. init: This method accepts the ItemManager object as an argument and
   assigns it to the items property.
2. createReporter: This method accepts an SKU code as an argument and
   returns an object.
      The returned object has one method, itemInfo. It logs to the console
      all the properties of an object as "key:value" pairs (one pair per line). There are no other properties or methods on the returned object (except for properties/methods inherited from Object.prototype).
3. reportInStock: Logs to the console the item names of all the items
   that are in stock as a comma separated values.

Notes:
- There's no need to add the ability to validate the uniqueness of the SKU
  code. Given the current description, it's possible that a duplicate will
  exist.
- Each required piece of information for an item corresponds to one
  property.
- If any of the require information provided is not valid, the item creator
 returns an object with a notValid property with a value of true.
- The created item objects should not have any methods/properties on them
  other than the required information above and those inherited from
  Object.prototype.
- You may add methods to the item manager as you deem necessary.

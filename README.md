# jQuery List App

This project uses jQeury to build a to-do list created dynamically by the user. Features include adding items with the "Add" button or by hitting enter, deleting items from the list, and sorting items.

## Technologies Used

- jQuery
- HTML
- CSS

## Interesting Notes

When implementing `sortable()` on mobile, the `crossOut()` feature would no longer work after the second list item had been added. I believed this had to do with a conflict between the timing of the two. I had played with setting a timeout with a delay on `sortable()` and enabling and disabling `sortable()` when the user tries to cross out an item. I then switched the Touch-Punch library for SortableJS and implemented a delay and transition. There are no conflicts for the scope of this app, and I was able to get sorting and crossing out to work on both the browser and mobile. 

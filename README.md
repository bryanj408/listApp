# jQuery List App

This project uses pure jQeury to build a to-do list created dynamically by the user. Features include adding items with the "Add" button or by hitting enter, deleting items from the list, and sorting items.

## Technologies Used

- jQuery
- HTML
- CSS

## Things to Improve

When implementing `sortable()` on mobile, the `crossOut()` feature will no longer work after the second list item has been added. I believe this has to do with a conflict between the timing of the two. I have played with setting a timeout with a delay on `sortable()` and enabling and disabling `sortable()` when the user tries to cross out an item. I will continue to try to find a fix for this feature. This is why there are multiple recent commits, as I am testing this feature on mobile.

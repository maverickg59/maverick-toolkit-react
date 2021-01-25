# Paginator

## TODO

- handle ellipsis and block 2 appears when (block 3 === range[0]) and user clicks block 3
- handle right ellipsis

### Defining each object as part of the component composition

Up to the point I started building this component I'd never written a pagination component. Not even using HTML. It's never really been on my list of to do's. It's with honesty that I can say that I never expected a pagination implementation to be so difficult.

Standard pagination isn't entirely too complex, but what made this tricky is replacing the standard >> double arrow indicating a navigation to the first or last page with a first and last indexed block and the dynamic nature of the paginator allowing a 5, 7, and 9 block configuration. After about a dozen tutorials and probably five failed implementations I realized it was necessary to define each object as it's composed to clarify the high level view of the component.

I've left my original definitions mostly intact and haven't added any. They may help you to understand what's going on.

I also found it necessary to define the output of each possible configuration of the paginator. This helped me to understand the effect of each action as the paginator is in play.

#### Definitions

records = an array of objects where each object is a record to be displayed
rows = total number of records to display on a single page
adjacents = total number of blocks as the product of n x 2 to be pushed onto the edge of the range
pages = total number of pages to be displayed by the paginator
currentPage = current page
principal = the first block in a range of pagination blocks
limit blocks = the first and last blocks in pagination
range = an array containing the total span of blocks to be rendered minus limit blocks
block = a navigation element that corresponds by page number to a rendered collection of content

#### Outputs

block length = 1: if pages.length === 1 return principal block
principalBlock

block length = 2: if pages.length === 2 return principal block plus single right offset
principalBlock, blockOne

block length = 3: if pages.length === 3 return principal block plus double right offset
navLeft, principalBlock, blockOne, blockTwo, navRight

block length = 6: if pages.length === 4
navLeft, principalBlock, blockOne, blockTwo, lastBlock, navRight

block length = 7: if pages.length === 5
navLeft, firstBlock, principalBlock, blockOne, blockTwo, lastBlock, navRight

block length = 8: if pages.length === 6
navLeft, firstBlock, ellipsis, principalBlock, blockOne, blockTwo, blockThree, ellipsis, lastBlock, navRight

STANDARD
block length = 8: if pages.length === 7
navLeft, firstBlock, ellipsis, principalBlock, blockOne, blockTwo, blockThree, blockFour, ellipsis, lastBlock, navRight
OR
+1 adjacents
block length = 9: if pages.length === 7
navLeft, firstBlock, principalBlock, blockOne, blockTwo, blockThree, blockFour, lastBlock, navRight

STANDARD
block length = 8: if pages.length === 8
navLeft, firstBlock, ellipsis, principalBlock, blockOne, blockTwo, blockThree, blockFour, blockFive, ellipsis, lastBlock, navRight
OR
+1 adjacents
block length = 10: if pages.length === 8
navLeft, firstBlock, ellipsis principalBlock, blockOne, blockTwo, blockThree, blockFour, ellipsis, blockFive, lastBlock, navRight

STANDARD
block length = 8: if pages.length === 9
navLeft, firstBlock, ellipsis, principalBlock, blockOne, blockTwo, blockThree, blockFour, blockFive, blockSix, ellipsis, lastBlock, navRight
OR
+1 adjacents
block length = 10: if pages.length === 9
navLeft, firstBlock, ellipsis principalBlock, blockOne, blockTwo, blockThree, blockFour, ellipsis, blockFive, blockSix, lastBlock, navRight
OR
+2 adjacents
block length = 11: if pages.length === 9
navLeft, firstBlock, principalBlock, blockOne, blockTwo, blockThree, blockFour, blockFive, blockSix, lastBlock, navRight

STANDARD
block length = 8: if pages.length === 10+
navLeft, firstBlock, ellipsis, principalBlock, blockOne, blockTwo, blockThree, blockFour, blockFive, blockSix, blockSeven, ellipsis, lastBlock, navRight
OR
+1 adjacents
block length = 10: if pages.length === 10+
navLeft, firstBlock, ellipsis principalBlock, blockOne, blockTwo, blockThree, blockFour, ellipsis, blockFive, blockSix, blockSeven, lastBlock, navRight
OR
+2 adjacents
block length = 12: if pages.length === 10+
navLeft, firstBlock, ellipsis principalBlock, blockOne, blockTwo, blockThree, blockFour, blockFive, blockSix, ellipsis, blockSeven, lastBlock, navRight

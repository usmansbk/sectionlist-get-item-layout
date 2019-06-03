# React Native SectionList getItemLayout

This package provides a function that helps you construct the `getItemLayout` function for your `SectionList`s. It's interface is based on [react-native-section-list-get-item-layout](https://medium.com/@jsoendermann/sectionlist-and-getitemlayout-2293b0b916fb). It's meant to be used like this:

```javascript
import sectionListGetItemLayout from 'reactnative-sectionlist-getitemlayout';

class MyComponent extends React.Component {

  _getItemLayout = sectionListGetItemLayout({
      // The height of the row with rowData at the given sectionIndex and rowIndex
      getItemHeight: (rowData, sectionIndex, rowIndex) => sectionIndex === 0 ? 100 : 50,

      // These five properties are optional
      getSeparatorHeight: () => 1, // The height of your separators between items
      getSectionHeaderHeight: () => 20, // The height of your section headers
      getSectionFooterHeight: () => 10, // The height of your section footers
      listHeaderHeight: 40, // The height of your header
      listFooterHeight: 20, // The height of your footer
    });

  render() {
    return (
      <SectionList
        {...otherStuff}
        getItemLayout={this._getItemLayout}
      />
    )
  }
}
```
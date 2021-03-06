import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';

export default class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['ID', 'Name', 'Price', 'QT', 'UPDATE', 'DELETE'],
      tableData: [
        ['1', 'book1', '300', '4', '', ''],
        ['2', 'book', '300', '4', '', ''],
        ['3', 'book3', '300', '4', '', ''],
        ['4', 'book4', '300', '4', '', ''],
      ],
    };
  }
  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity
        onPress={() => this._alertIndex(index)}
        style={styles.btnGroup}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
        <Text style={styles.txtWelcome}>Table View</Text>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          {state.tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={
                    cellIndex === 4 || cellIndex === 5
                      ? element(cellData, index)
                      : cellData
                  }
                  textStyle={styles.text}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>
        <View>
          <TouchableOpacity style={styles.btnAdd}>
            <Text
              style={styles.txtAdd}
              onPress={() => this.props.navigation.navigate('Form')}>
              Add Book
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  txtWelcome: {
    fontSize: 40,
    color: 'black',
    marginBottom: 110,
    textDecorationStyle:'dotted',
    textShadowRadius:100,
    fontWeight:'bold'
  },
  head: {height: 40, backgroundColor: 'green'},
  text: {margin: 6},
  row: {flexDirection: 'row', backgroundColor: 'lightgreen'},
  btn: {
    width: 50,
    height: 20,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor:'#78e08f',
    justifyContent:'center'
  
  },
  btnText: {textAlign: 'center', color: 'black'},
  btnGroup: {flex: 1, flexDirection: 'row'},
  btnAdd: {
    width: '50%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    marginLeft:85
  },
});

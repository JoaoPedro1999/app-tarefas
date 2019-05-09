import React, { Component } from 'react';
import {
  StyleSheet, View, ScrollView, Text, Platform,
} from 'react-native';
import Post from './components/Post';

const white = '#FFF';
const primary = '#EE7777';
const title = '#333';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },

  header: {
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20,
      },
      android: {
        height: 56,
        paddingTop: 0,
      },
    }),
  },

  headerTitle: {
    color: title,
    fontSize: 16,
    fontWeight: 'bold',
  },

  scrollview: {
    overflow: 'hidden',
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Fazer Cafe',
        author: 'Leonardo Maestri',
        content:
          'Praesent nec nibh facilisis, congue magna vitae, placerat urna. Sed at lacinia lectus. Nullam vitae hendrerit ante. Fusce sed massa consequat, pharetra mi vel, semper velit.',
      },
      {
        id: 1,
        title: 'Fazer Cafe',
        author: 'Leonardo Maestri',
        content:
          'Praesent nec nibh facilisis, congue magna vitae, placerat urna. Sed at lacinia lectus. Nullam vitae hendrerit ante. Fusce sed massa consequat, pharetra mi vel, semper velit.',
      },
      {
        id: 3,
        title: 'Fazer Cafe',
        author: 'Fazer Cafe',
        content:
          'Praesent nec nibh facilisis, congue magna vitae, placerat urna. Sed at lacinia lectus. Nullam vitae hendrerit ante. Fusce sed massa consequat, pharetra mi vel, semper velit.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>App</Text>
        </View>
        <ScrollView style={styles.scrollview}>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

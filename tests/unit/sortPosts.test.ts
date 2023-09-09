import { expect, test } from 'vitest'
import { sortPosts } from "../../app/toolbox";

test("sorts Post by date in descending order", () => {
  const posts = [
    {data: { date: 20000101}, content: "", filePath: ""},
    {data: { date: 20020202}, content: "", filePath: ""},
    {data: { date: 20010101}, content: "", filePath: ""},
  ]
  const rv = sortPosts(posts) 
  expect(rv[0].data.date).toEqual(20020202)
  expect(rv[1].data.date).toEqual(20010101)
  expect(rv[2].data.date).toEqual(20000101)
})
test("sorts Post by date in ascending order", () => {
  const posts = [
    {data: { date: 20000101}, content: "", filePath: ""},
    {data: { date: 20010101}, content: "", filePath: ""},
    {data: { date: 20020202}, content: "", filePath: ""},
  ]
  const rv = sortPosts(posts, "asc") 
  expect(rv[0].data.date).toEqual(20000101)
  expect(rv[1].data.date).toEqual(20010101)
  expect(rv[2].data.date).toEqual(20020202)
})
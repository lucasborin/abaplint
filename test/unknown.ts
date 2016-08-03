import "../typings/index.d.ts";
import * as chai from "chai";
import * as fs from "fs";
import { Unknown } from "../src/statements/statement";
import File from "../src/file";
import Runner from "../src/runner";

let expect = chai.expect;

describe("unknown statements", () => {
  let tests =  [
    {abap: "data foo bar."},
    {abap: "asdf."},
    {abap: "asdf"},
    {abap: "asdf asdf."},
  ];

  tests.forEach((test) => {
    it("\"" + test.abap + "\" should be unknown", () => {
      let file = new File("foo.abap", test.abap);
      Runner.run([file]);
      expect(file.getStatements().length).to.equals(1);
      for (let statement of file.getStatements()) {
        expect(statement instanceof Unknown).to.equals(true);
      }
    }
  )});
});
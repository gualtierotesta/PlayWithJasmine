/*
 * Copyright 2015 Gualtiero Testa <www.gualtierotesta.it>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*global describe, it, expect, beforeAll, afterAll, beforeEach, afterEach */
/*jshint strict:false */

// toBe --> ===
// not  --> !
// toEqual --> ==
// toMatch --> regular expression
// toBeDefined
// toBeNull
// toBeTruthy


describe("upcase", function () {

    beforeAll(function () {
        console.log('beforeAll');
    });

    afterAll(function () {
        console.log('afterAll');
    });

    beforeEach(function () {
        console.log('beforeEach');
    });

    afterEach(function () {
        console.log('afterEach');
    });

    it("Standard", function () {
        // given
        // when
        var res = upcase("ciao");
        // then
        expect(res).toBe("CIAO");
    });

    it("Empty", function () {
        expect(upcase("")).toBe("");
    });

    it("Null", function () {
        expect(upcase(null)).toBeNull();
    });

    it("Null", function () {
        expect(1).toBeTruthy();
        expect(true).toBeTruthy();
        expect("1").toBeTruthy();
        expect("ciao").toBeTruthy();
    });
});



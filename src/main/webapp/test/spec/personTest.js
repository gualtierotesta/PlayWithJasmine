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

/*global describe, it, expect, beforeEach */
/*jshint strict:false */

// toBe --> ===
// not  --> !
// toEqual --> ==
// toMatch --> regular expression
// toBeDefined
// toBeNull
// toBeTruthy


describe("person", function () {

    var sut;

    beforeEach(function () {
        sut = new Person('Mario', 'Rossi');
    });

    it("Public Method", function () {
        // given
        // when
        var res = sut.publicMethod();
        // then
        expect(res).toContain("Mario ROSSI");
    });

    it("Privileged Method", function () {
        // given
        // when
        var res = sut.privilegedMethod();
        // then
        expect(res).toContain("Mario ROSSI");
    });

    it("SpyOn on privilegedMethod, kept original", function () {
        // given
        spyOn(sut, 'privilegedMethod').and.callThrough();
        // when
        var res = sut.publicMethod();
        // then
        expect(res).toContain("Mario ROSSI");
        expect(sut.privilegedMethod).toHaveBeenCalled();
    });

    it("SpyOn on privilegedMethod, return value stubbed", function () {
        // given
        var msg = "ciao";
        spyOn(sut, 'privilegedMethod').and.returnValue(msg);
        // when
        var res = sut.publicMethod();
        // then
        expect(res).toContain(msg);
        expect(sut.privilegedMethod).toHaveBeenCalled();
    });

//    it("SpyOn", function () {
//        // given
//        spyOn(sut, 'name');
//        // when
//        var res = sut.print();
//        // then
//        expect(res).toBe("Print John Doe");
//        expect(sut.name).toHaveBeenCalled();
//    });


});



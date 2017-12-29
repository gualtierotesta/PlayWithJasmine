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

/*global describe, it, beforeEach, afterEach, jasmine, expect */

describe("Test Ajax Call", function () {

    "use strict";

    beforeEach(function () {
        jasmine.Ajax.install();
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    });


    it("Check correct url is invoked", function () {
        // given
        var url = 'url';
        var xhr = new XMLHttpRequest();
        var doneFn = jasmine.createSpy("success");
        xhr.onreadystatechange = function (args) {
            console.log(args);
            if (this.readyState === this.DONE) {
                doneFn(this.responseText);
            }
        };
        // when
        xhr.open('GET', url);
        xhr.send();
        // then
        expect(jasmine.Ajax.requests.mostRecent().url).toBe(url);
        expect(doneFn).not.toHaveBeenCalled();
    });


    it("Return OK on success", function () {
        // given
        var xhr = new XMLHttpRequest();
        var answer;
        xhr.onreadystatechange = function (args) {
            console.log(args);
            if (this.readyState === this.DONE) {
                answer = this.responseText.toUpperCase();
            }
        };
        // when
        jasmine.Ajax.requests.mostRecent().respondWith({
            "status": 200,
            "contentType": 'text/plain',
            "responseText": 'The answer is yes'
        });
        // then
        expect(answer).toContain('YES');
    });

    it("Return KO on failure", function () {
        // given
        var xhr = new XMLHttpRequest();
        var answer;
        xhr.onreadystatechange = function (args) {
            console.log(args);
            if (this.readyState === this.DONE) {
                answer = this.responseText.toUpperCase();
            } else {
                answer = "KO";
            }
        };
        // when
        jasmine.Ajax.requests.mostRecent().respondWith({
            "status": 404,
            "contentType": 'text/plain',
            "responseText": 'Not found'
        });
        // then
        expect(answer).toBe('NOT FOUND');
    });

});


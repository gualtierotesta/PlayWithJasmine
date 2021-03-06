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

/*jshint strict:false */

function Person(pFirstName, pLastName) {

    // Public vars
    this.firstName = pFirstName;
    // private vars
    var prefix = 'Person: ';
    var lastName = pLastName;

    /**
     * Private method
     */
    function privateMethod() {
        return lastName;
    }

    /**
     * Privileged method: like public but with access to both public and private fields
     */
    this.privilegedMethod = function () {
        return prefix + this.firstName + " " + privateMethod().toUpperCase();
    };

}

/**
 * Public method: access to public fields and privileged methods
 */
Person.prototype.publicMethod = function () {
    return "--> " + this.privilegedMethod();
};

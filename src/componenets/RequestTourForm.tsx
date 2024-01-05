import "../styles/RequestTourForm.css"

function RequestTourForm() {

    return (
      <div>
         <div className="request-tour-form-container">
         <h2 className="form-title"> Property Tour Request Form:</h2>
                    <p className="form-inst"> If the requirements for the chosen property are met, you will be sent a link to set up a showing time within 24 hours after submitting the form.</p>
                    <form action="https://public.herotofu.com/v1/48f4ee50-5575-11ee-99c9-b9cd803366c9" method="post" accept-charset="UTF-8">

                        <div className="form-inner-container">
                            <div>
                                <input name="First Name" id="first-name" type="text" placeholder="First Name" className="input" required />
                              </div>
                              <div>
                                <input name="Last Name" id="last-name" type="text" placeholder="Last Name" className="input" required  />
                              </div>
                        </div>

                        <div className="form-inner-container">
                            <div>
                                <input name="Email" id="email" type="email" placeholder="Email Address" className="input" required  />
                            </div>
                            <div>
                                <input name="Phone Number" id="phone-number" type="tel" placeholder="Phone Number: 555-555-1234" className="input" required  />
                            </div>
                        </div>

                        <div>
                            <select name="Property" id="property" className="input" required> 
                                <option value=""> -- Select Property </option>
                                <option value="3839 57th St, Des Moines, Iowa, 50310"> 3839 57th St, Des Moines, Iowa, 50310 </option>
                            </select>
                            <select name="Number Of Adult Occupants" id="number-of-adult-ocupants" className="input" required> 
                                <option value=""> -- Number Of Adult Occupants </option>
                                <option value="1"> 1 </option>
                                <option value="2"> 2 </option>
                                <option value="3"> 3 </option>
                                <option value="4"> 4 </option>
                                <option value="Over 4"> Over 4 </option>
                            </select>
                            <select name="Number Of Child Occupants" id="number-of-child-ocupants" className="input" required> 
                                <option value=""> -- Number Of Child Occupants  </option>
                                <option value="0"> 0</option>
                                <option value="1"> 1 </option>
                                <option value="2"> 2 </option>
                                <option value="3"> 3 </option>
                                <option value="4"> 4 </option>
                                <option value="Over 4"> Over 4 </option>
                            </select>
                        </div>

                        <div className="form-inner-container"> 
                            <div>
                                <select name="Household Income" id="household-income" className="input" required> 
                                    <option value=""> -- Household Income </option>
                                    <option value="Below $25,000"> Below $25,000 </option>
                                    <option value="$25,000 - $29,999"> $25,000 - $29,999 </option>
                                    <option value="$30,000 - $34,999"> $30,000 - $34,999 </option>
                                    <option value="$35,000 - $39,999"> $35,000 - $39,999 </option>
                                    <option value="$40,000 - $44,999"> $40,000 - $44,999 </option>
                                    <option value="$50,000 - $54,999"> $50,000 - $54,999 </option>
                                    <option value="$60,000 - $64,999"> $60,000 - $64,999 </option>
                                    <option value="$65,000 - $69,999"> $65,000 - $69,999 </option>
                                    <option value="Over $70,000"> Over $70,000 </option>
                                </select>
                            </div>
                            <div>
                                <select name="Credit Score" id="credit-score" className="input" required> 
                                    <option value=""> -- Credit Score </option>
                                    <option value="Below 500"> Below 500</option>
                                    <option value="500-549"> 500-549 </option>
                                    <option value="550-599"> 550-599 </option>
                                    <option value="600-649"> 600-649 </option>
                                    <option value="650- 699"> 650- 699 </option>
                                    <option value="700-749"> 700-749 </option>
                                    <option value="750-799"> 750-799 </option>
                                    <option value="Over 800"> Over 800 </option>
                                </select>
                            </div>
                        </div>

                        <div className="form-inner-container">
                            <div> 
                                <select name="Smoking Status" id="smoking-status" className="input" required >
                                    <option> -- Smoking Status (Including E-Cigarettes) </option>
                                    <option> Smoker </option>
                                    <option> Non-Smoker </option>
                                </select>
                            </div>
                            <div> 
                                <select name="Pet" id="pet" className="input" required > 
                                    <option value=""> -- Pets </option>
                                    <option value="None"> None </option>
                                    <option value="Dog"> Dog </option>
                                    <option value="Cat"> Cat </option>
                                    <option value="Other"> Other</option>
                                    <option value="Dog & Cat"> Dog & Cat </option>
                                    <option value="Dog, Cat & Other"> Dog, Cat & Other </option>
                                </select>
                            </div>
                        </div>

                        <div className="submit-form-btn-container">
                          <input type="submit" value="Submit Form" className="submit-form-btn" />
                          <div className="hidden-form-element"  aria-hidden="true">
                            <input type="text" name="_gotcha"  autoComplete="off" />
                          </div>
                        </div>
                    </form>
         </div>
      </div>
    )
  }
  
export default RequestTourForm
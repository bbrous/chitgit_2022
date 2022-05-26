
            {/* ------Chit-------------------------- */}

            <FormComponentWrapper>
              <ComponentName>
                Chit 
              </ComponentName>

              
              <ComponentWrapper>
                <RadiotWrapper>
                  <ChitRadio
                    name={"chitType"}
                    control={control}
                    label={"logType"}
                    options={[
                      {
                        label: "personal chit",
                        value: "personal",
                      },
                     
 
                      {
                        label: "milestone",
                        value: "milestone",
                      },
                      {
                        label: "awChit",
                        value: "awChit",
                      },



                    ]}
                    defaultValue = {defaultValues.chitType}
                  />
                </RadiotWrapper>


                


              </ComponentWrapper>

              {chitTypeSelected === 'personal' && 

           
 
<ComponentWrapperIndent>
  <RadiotWrapper>
    <ChitRadio
      name={"chitColor"}
      control={control}
      label={"logType"}
      options={[

        {
          label: "copper",
          value: "copper",
        },
        {
          label: "silver",
          value: "silver",
        },

        {
          label: "gold",
          value: "gold",
        },





      ]}
      defaultValue = {defaultValues.chitColor}
    />
  </RadiotWrapper>


  


</ComponentWrapperIndent>

    }



            </FormComponentWrapper>
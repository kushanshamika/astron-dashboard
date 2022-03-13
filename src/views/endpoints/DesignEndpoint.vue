<template>
  <v-row>
    <div class="col-8">
      <v-card class="pa-5 mb-5">
        <v-row>
          <div class="col-10"><h2 class="font-weight-light pb-5">Design Endpoint</h2></div>
          <div class="col-2">
            <v-btn
                color="primary"
                @click="save"
            >
              <v-icon left>
                mdi-content-save-outline
              </v-icon>
              Save
            </v-btn>
          </div>
        </v-row>
      </v-card>

      <v-form
          ref="form"
      >
        <v-row justify="center">
          <v-expansion-panels
              accordion
              class="pa-5 mb-5"
          >
            <v-expansion-panel
                v-for="(action, actionIndex) in actions"
                :key="actionIndex"
            >
              <v-expansion-panel-header>{{action.method}}</v-expansion-panel-header>
              <v-expansion-panel-content>

              <!--        JSONRemove        -->

                <v-row
                    v-if="action.method==='JSONRemove'"
                >
                  <div class="col-11">
                    <v-row
                        v-for="(key, i) in action.key"
                        :key="i"
                    >
                      <v-text-field
                          v-model="action.key[i]"
                          label="JSON Field"
                          required
                          placeholder="JSON Field"
                      ></v-text-field>
                      <v-btn
                          fab
                          dark
                          x-small
                          color="error"
                          class="ma-4"
                          @click="removeJSONRemoveField(actionIndex, i)"
                          v-if="i>0"
                      >
                        <v-icon dark>
                          mdi-close
                        </v-icon>
                      </v-btn>
                      <v-btn
                          fab
                          dark
                          x-small
                          color="primary"
                          class="ma-4"
                          @click="addJSONRemoveField(actionIndex)"
                          v-if="i==0"
                      >
                        <v-icon dark>
                          mdi-plus
                        </v-icon>
                      </v-btn>
                    </v-row>
                  </div>
                  <div class="col-1">
                  </div>
                </v-row>

                <!--         JSONPatch       -->

                <div
                    v-if="action.method==='JSONPatch'"
                >

                <v-row

                >

                  <v-col
                      cols="12"
                      md="6"
                  >
                    <v-select
                        label="Modifier"
                        required
                        :items="HTTPAction"
                    ></v-select>
                  </v-col>

                  <v-col
                      cols="12"
                      md="6"
                  >
                    <v-text-field
                        label="Resource URL"
                        required
                        placeholder="https://jsonplaceholder.typicode.com/posts"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                      cols="12"
                      md="9"
                  >
                    Request Body Fields
                  </v-col>
                  <v-col
                      cols="12"
                      md="3"
                  >
                    <v-btn
                        color="primary"
                        @click="addJSONPatchBodyField(actionIndex)"
                    >
                      <v-icon left>mdi-plus</v-icon>
                      Field
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row
                    v-for="(body, i) in action.body"
                    :key="i"
                >
                      <v-col
                          cols="12"
                          md="11"
                      >
                        <v-text-field
                            v-model="action.body[i]"
                            label="JSON Field"
                            required
                            placeholder="JSON Field"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          md="1"
                      >
                        <v-btn
                            fab
                            dark
                            x-small
                            color="error"
                            class="ma-4"
                            @click="removeJSONPatchBodyField(actionIndex, i)"
                        >
                          <v-icon dark>
                            mdi-close
                          </v-icon>
                        </v-btn>
                      </v-col>

                </v-row>

                <v-row>
                  <v-col
                      cols="12"
                      md="9"
                  >
                    Response
                  </v-col>
                  <v-col
                      cols="12"
                      md="3"
                  >
                    <v-btn
                        color="primary"
                        @click="addJSONPatchResponse(actionIndex)"
                    >
                      <v-icon left>mdi-merge</v-icon>
                      Merge
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row
                    v-if="action.response"
                >
                  <v-col
                      cols="12"
                      md="12"
                  >
                    <v-text-field
                        v-model="action.response.key"
                        label="JSON Field"
                        required
                        placeholder="JSON Field"
                    ></v-text-field>
                  </v-col>
                </v-row>

                </div>

                <!--         JSONFetch      -->

                <div
                    v-if="action.method==='JSONFetch'"
                >

                  <v-row>

                    <v-col
                        cols="12"
                        md="6"
                    >
                      <v-text-field
                          v-model="action.url"
                          label="Resource URL"
                          required
                          placeholder="https://jsonplaceholder.typicode.com/posts"
                      ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="6"
                    >
                      <v-text-field
                          v-model="action.key"
                          label="Merge Key"
                          required
                      ></v-text-field>
                    </v-col>
                  </v-row>


                  <v-row>
                    <v-col
                        cols="12"
                        md="9"
                    >
                      Request URL Parameters
                    </v-col>
                    <v-col
                        cols="12"
                        md="3"
                    >
                      <v-btn
                          color="primary"
                          @click="addJSONFetchURLParameter(actionIndex)"
                      >
                        <v-icon left>mdi-plus</v-icon>
                        PARAM
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row
                      v-for="(param, i) in action.params"
                      :key="i"
                  >
                    <v-col
                        cols="12"
                        md="4"
                    >
                      <v-select
                          v-model="param.attachTo"
                          label="Attach To"
                          required
                          :items="paramAttach"
                          item-text="name"
                          item-value="value"
                      ></v-select>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                      <v-select
                          v-model="param.source"
                          label="Source"
                          required
                          :items="paramSource"
                          item-text="name"
                          item-value="value"
                      ></v-select>
                    </v-col>
                    <v-col
                        cols="12"
                        md="3"
                    >
                      <v-text-field
                          v-model="param.field"
                          label="JSON Field"
                          required
                          placeholder="JSON Field"
                      ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="1"
                    >
                      <v-btn
                          fab
                          dark
                          x-small
                          color="error"
                          class="ma-4"
                          @click="removeJSONFetchURLParameter(actionIndex, i)"
                      >
                        <v-icon dark>
                          mdi-close
                        </v-icon>
                      </v-btn>
                    </v-col>

                  </v-row>

                </div>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      class="ma-1"
                      color="error"
                      text
                      @click="removeAction(actionIndex)"
                  >
                    Delete Modifier
                  </v-btn>
                </v-card-actions>

              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-form>

      <v-card class="pa-5 mb-5">
        <v-form
            ref="form"
        >

          <v-select
              label="Modifier"
              required
              :items="modifiers"
              v-model="action"
          ></v-select>

          <v-btn
              block
              color="primary"
              @click="addAction"
          >
            <v-icon left>mdi-plus</v-icon>
            Add Modifier
          </v-btn>

        </v-form>
      </v-card>

    </div>
    <div class="col-4">
      <v-card class="pa-5">
        <h2 class="font-weight-light pb-5">Endpoint Overview</h2>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>GET</v-list-item-title>
            <v-list-item-subtitle>HTTP Method</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>/profile/:id</v-list-item-title>
            <v-list-item-subtitle>API Slug</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </v-row>
</template>

<script>

export default {
  name: "DesignEndpoint",
  data: () => ({
    actions: [],
    modifiers: [
        "JSONFetch",
        "JSONRemove",
        "JSONPatch"
    ],
    HTTPAction: [
      "post",
      "put",
      "delete",
      "patch"
    ],
    paramAttach: [
      {value: 'query', name: 'Query'},
      {value: 'params', name: 'Param'}
    ],
    paramSource: [
      {value: 'request', name: 'Request'},
      {value: 'response', name: 'Response'}
    ],
    action: null
  }),
  methods: {
    addAction(){
      const JSONRemove = {
        method: "JSONRemove",
        key: [""]
      };
      const JSONPatch = {
        method: "JSONPatch",
        body: []
      };
      const JSONFetch = {
        method: "JSONFetch",
        key:null,
        params: []
      };
      switch (this.action) {
        case "JSONRemove":
          this.actions.push(JSONRemove)
              break;
        case "JSONPatch":
          this.actions.push(JSONPatch)
            break;
        case "JSONFetch":
          this.actions.push(JSONFetch)
              break;
      }
    },
    removeAction(index){
      this.actions.splice(index, 1)
    },
    save(){
      const data = {
        actions: this.actions
      }
      console.log(JSON.stringify(data, null, 2))
    },
    addJSONRemoveField(actionIndex){
      this.actions[actionIndex].key.push("");
    },
    removeJSONRemoveField(actionIndex, fieldIndex){
      this.actions[actionIndex].key.splice(fieldIndex, 1);
    },
    addJSONPatchBodyField(actionIndex){
      this.actions[actionIndex].body.push("");
    },
    removeJSONPatchBodyField(actionIndex, fieldIndex){
      this.actions[actionIndex].body.splice(fieldIndex, 1);
    },
    addJSONPatchResponse(actionIndex){
      this.actions[actionIndex].response = {action: 'merge', key: null};
      this.$forceUpdate();
    },
    isResponseBody(actionIndex){
      return this.actions[actionIndex].response;
    },
    addJSONFetchURLParameter(actionIndex){
      this.actions[actionIndex].params.push({});
    },
    removeJSONFetchURLParameter(actionIndex, fieldIndex){
      this.actions[actionIndex].params.splice(fieldIndex, 1);
    },
  }
}
</script>

<style scoped>

</style>
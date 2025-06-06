
package com.calamansi.demo.service.json2pojo;

import java.util.LinkedHashMap;
import java.util.Map;
import javax.annotation.processing.Generated;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "audio_tokens",
    "cached_tokens"
})
@Generated("jsonschema2pojo")
public class PromptTokensDetails {

    @JsonProperty("audio_tokens")
    private Integer audioTokens;
    @JsonProperty("cached_tokens")
    private Integer cachedTokens;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();

    @JsonProperty("audio_tokens")
    public Integer getAudioTokens() {
        return audioTokens;
    }

    @JsonProperty("audio_tokens")
    public void setAudioTokens(Integer audioTokens) {
        this.audioTokens = audioTokens;
    }

    @JsonProperty("cached_tokens")
    public Integer getCachedTokens() {
        return cachedTokens;
    }

    @JsonProperty("cached_tokens")
    public void setCachedTokens(Integer cachedTokens) {
        this.cachedTokens = cachedTokens;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

}

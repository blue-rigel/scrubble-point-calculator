package com.scrubble.challenge.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Getter @Setter @NoArgsConstructor
public class Score implements Serializable {

    @Id
    @GeneratedValue( strategy = GenerationType.UUID )
    private String id;

    private String name = "No Name";

    @NotNull(message = "Score cannot be empty")
    private int score;

}

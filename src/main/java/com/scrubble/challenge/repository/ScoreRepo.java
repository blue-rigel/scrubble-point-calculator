package com.scrubble.challenge.repository;

import com.scrubble.challenge.entity.Score;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ScoreRepo extends CrudRepository<Score, Long> {

    List<Score> findTop10ByOrderByScoreDesc();

}

package com.calamansi.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.calamansi.demo.model.*;
import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Long> {
    Optional<Account> findByEmail(String email);
    Boolean existsByEmail(String email);
}

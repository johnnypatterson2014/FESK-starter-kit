package com.calamansi.demo.repo;

import com.fasterxml.jackson.databind.ser.std.StdArraySerializers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import com.calamansi.demo.model.*;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByErole(ERole erole);
    Boolean existsByErole(ERole erole);
}

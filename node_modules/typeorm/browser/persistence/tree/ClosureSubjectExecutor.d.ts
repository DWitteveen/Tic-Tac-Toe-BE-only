import { Subject } from "../Subject";
import { QueryRunner } from "../../query-runner/QueryRunner";
/**
 * Executes subject operations for closure entities.
 */
export declare class ClosureSubjectExecutor {
    protected queryRunner: QueryRunner;
    constructor(queryRunner: QueryRunner);
    /**
     * Removes all children of the given subject's entity.

    async deleteChildrenOf(subject: Subject) {
        // const relationValue = subject.metadata.treeParentRelation.getEntityValue(subject.databaseEntity);
        // console.log("relationValue: ", relationValue);
        // this.queryRunner.manager
        //     .createQueryBuilder()
        //     .from(subject.metadata.closureJunctionTable.target, "tree")
        //     .where("tree.");
    }*/
    /**
     * Executes operations when subject is being inserted.
     */
    insert(subject: Subject): Promise<void>;
}
